import * as React from "react";

/**
 * @param {Array<{}>} cities Array of objects that represents cities.
 * 
 * @interface ChartProps
 */
interface ChartProps{
    cities: [{
        id: number,
        name: string,
        population: number
    }];
}

/**
 * Manages chart.
 * 
 * Chart is drawn on canvas.
 * Depending on received values we calculate chart limits on vertical
 * axis, calculate horizontal step. Translate recieved values to values
 * that will be shown on chart (chart's vertical axis starts not from
 * 0 so we must translate values to new coord system.). Than calculate
 * ratio of canvas height to char limits, this ration is needed to get
 * position on canvas.
 * 
 * @export
 * @class Chart
 * @extends {React.Component<ChartProps, {}>}
 */
export class Chart extends React.Component<ChartProps, {}>{

    context: CanvasRenderingContext2D;
    width: number;  // Canvas height.
    height: number; // Canvas width.
    topChartLimit: number;
    bottomChartLimit: number;
    dots: number[]; // Translated to chart system values.
    horizontalStep: number;
    verticalRatio: number;

    constructor(props: ChartProps){
        super(props);

        this.width = 600;
        this.height = 400;
        this.topChartLimit = Number.NEGATIVE_INFINITY;
        this.bottomChartLimit = Number.POSITIVE_INFINITY;

        let cities = this.props.cities;

        /** Calculate chart up and bottom limits. */
        cities.forEach(item =>{
            if(this.topChartLimit < item.population)
                this.topChartLimit = item.population;
            if(this.bottomChartLimit > item.population)
                this.bottomChartLimit = item.population;
        });
        let k = Math.pow(10, this.topChartLimit.toString().length-1);
        this.topChartLimit =  Math.round(
                        (this.topChartLimit + this.topChartLimit/10)/k
                    )*k;
        k = Math.pow(10, this.topChartLimit.toString().length-1);
        this.bottomChartLimit = Math.round(
                        (this.bottomChartLimit - this.bottomChartLimit/10)/k
                    )*k;
        let range = this.topChartLimit - this.bottomChartLimit;
        let rangeLen = range.toString().length-1;

        /** Vertical values in chart coord system */
        this.dots = cities.map(item => item.population-this.bottomChartLimit);

        /** Horizontal step. 20 - offset from right border, so we
         * leave some space left. */
        this.horizontalStep = (this.width-20) / cities.length;

        /** Vertical ratio. This is needed to get position on canvas. */
        this.verticalRatio = this.height
                                / (this.topChartLimit - this.bottomChartLimit);
    }

    /**
     * When React mounted component we draw chart to context.
     * 
     * @memberof Chart
     */
    componentDidMount(): void{
        let canvas: HTMLCanvasElement;
        canvas = document.getElementById('chart') as HTMLCanvasElement;
        this.context = canvas.getContext('2d');
        this.draw();
    }

    draw(){
        this.context.font = "10px Arial";

        let xAxisOffset = 40;

        /** Draw Y axis */
        this.context.moveTo(xAxisOffset, this.height);
        this.context.lineTo(xAxisOffset, 0);
        this.context.fillText(
            this.topChartLimit.toString(),
            5,10
        );
        this.context.fillText(
            this.bottomChartLimit.toString(),
            5,this.height-10
        );

        /** Draw X axis */
        this.context.moveTo(xAxisOffset, this.height-1);        
        this.context.lineTo(this.width, this.height-1);

        /** 20 - offset from left border. */
        let xPos = 20 + xAxisOffset;
        this.context.moveTo(
                xPos, 
                this.height-this.dots[0]*this.verticalRatio
            );
        for(let i in this.dots){
            
            this.context.lineTo(
                        xPos, 
                        this.height-this.dots[i]*this.verticalRatio
                    );
            this.context.stroke();

            /** Draw circle. */
            this.context.beginPath();
            this.context.arc(
                        xPos, 
                        this.height-this.dots[i]*this.verticalRatio,
                        3,0,2*Math.PI
                    );
            this.context.stroke();

            /** Draw city name. */
            this.context.save();
            this.context.translate(
                    xPos, 
                    this.height-this.dots[i]*this.verticalRatio - 10
                );
            this.context.rotate(-Math.PI/2);
            this.context.fillText(
                    this.props.cities[i].name,
                    0,0
                );
            this.context.restore();

            /** Return to value position. */
            this.context.moveTo(
                        xPos, 
                        this.height-this.dots[i]*this.verticalRatio
                    );

            xPos += this.horizontalStep;
        }
    }

    render(){
        return(
            <canvas id="chart" height={this.height} width={this.width} />
        );
    }
}