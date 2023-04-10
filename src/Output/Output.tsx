import React from 'react';
import parse from 'html-react-parser';

interface OutputProps {
    value: string;
}

class Output extends React.Component<OutputProps> {
    render() {
        return (
            <div>
                {parse(this.props.value)}
            </div>
        );
    }
}