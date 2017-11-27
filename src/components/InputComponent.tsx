import * as React from "react";

export interface InputComponentProps {
    name?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?(value: string): void;
}

export class InputComponent extends React.Component<InputComponentProps> {
    constructor(props: InputComponentProps){
        super(props);        

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void{        
        this.props.onChange(e.currentTarget.value);
    }
    render(){
        return (
            <input 
                name={this.props.name}
                type={this.props.type}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                className="form-control" />
        );
    }
}