import React, { PropTypes } from 'react';
import { Card } from '../components/impression';
import { CommenTable, Highlight, Breadcrumb } from '../components';

const BreadcrumbView = ({ routes }) => {
    return (
        <div>
            <Breadcrumb routes={routes} />
            <Card block noborder>
                <h3>Examples</h3>
                <Card>
                    <Card.Block>
                        <Breadcrumb className="no-padding">
                            <a href="javascript:void(0);">首页</a>
                            <a href="javascript:void(0);">财务管理</a>
                            <span>收入</span>
                        </Breadcrumb>
                    </Card.Block>
                    <Highlight>
                        {`import { Breadcrumb } from 'impression-react';\n\n`}
                        {`<Breadcrumb>\n`}
                        {` <a href="javascript:void(0);">首页</a>\n`}
                        {` <a href="javascript:void(0);">财务管理</a>\n`}
                        {` <span>收入</span>\n`}
                        {'</Breadcrumb>'}
                    </Highlight>
                </Card>
                <h3>Arrow separator</h3>
                <Card>
                    <Card.Block>
                        <Breadcrumb className="no-padding" separator="arrow">
                            <a href="javascript:void(0);">首页</a>
                            <a href="javascript:void(0);">财务管理</a>
                            <span>收入</span>
                        </Breadcrumb>
                    </Card.Block>
                    <Highlight>
                        {'<Breadcrumb separator="arrow">...</Breadcrumb>'}
                    </Highlight>
                </Card>
                <h3 className="text-secondary">API</h3>
                <CommenTable
                    data={[
                        ['separator', '设置分隔符，可选值为 arrow', 'string', ''],
                        ['routes', '设置路径，必填，key 值为 path(路径) 和 clickable(是否可点击)', 'arrayOf(object)', ''],
                        ['className', '自定义样式', 'string', ''],
                    ]}
                />
            </Card>
        </div>
    );
};

BreadcrumbView.propTypes = {
    routes: PropTypes.array,
};

export default BreadcrumbView;
