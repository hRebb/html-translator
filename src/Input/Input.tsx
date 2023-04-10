import React, { ChangeEvent } from 'react';

interface InputProps<Input> {
    value: Input;
    onChange: (value: Input) => void;
}

class Input<Input> extends React.Component<InputProps<Input>> {
    handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.props.onChange(event.target.value as unknown as Input);
    };

    render() {
        return (
            <textarea value={this.props.value as unknown as string} onChange={this.handleChange}></textarea>
        );
    }
}

export default Input;