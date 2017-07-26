import classnames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/**
 * Radio组件.
 */
export default class Radio extends PureComponent {
    // props校验
    static propTypes = {
        // 名称
        name: PropTypes.any,
        // 返回值
        value: PropTypes.any,
        // 自定义样式
        className: PropTypes.string,
        // 是否选中
        checked: PropTypes.bool,
        // 默认是否选中
        defaultChecked: PropTypes.bool,
        // 是否disabled
        disabled: PropTypes.bool,
        // 回调函数
        onChange: PropTypes.func,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        disabled: false,
    }

    constructor(props) {
        super(props);

        this.state = {
            time: (new Date()).valueOf() + Math.ceil(Math.random() * 10), // 设置radio id时间戳
        };
    }

    getValue() {
        let { value } = this.props, // props内容
            { main } = this.refs; // dom节点

        if(value === undefined) {
            return main.checked;
        }

        return value;
    }
    setValue(checked) {
        let { main } = this.refs;

        main.checked = !!checked;
    }

    onChangeHandle = (event, value) => {
        let { onChange } = this.props;

        onChange && onChange(event, value);
    }

    // 渲染
    render() {
        let {
            value,
            checked,
            defaultChecked,
            disabled,
            className,
            name,
            onChange,
            children,
            ...others
            } = this.props;
        let { time } = this.state;

        return(
            <label
                {...others}
                className={classnames('radio', className)}
                htmlFor={`radio${time}`}
                >
                <input
                    ref="main"
                    type="radio"
                    name={name}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={event => onChange && onChange(event, value)}
                    id={`radio${time}`}
                    />
                <div className="radio-addon">
                    <i />
                </div>
                <span className="radio-label">{children}</span>
            </label>
        );
    }
}

// getValue
Radio.getValue = ref => {
    if(!ref) return undefined;
    return ref.getValue();
};

// setValue
Radio.setValue = (ref, checked) => {
    if(!ref) return;

    ref.setValue(checked);
};
