### 示例

**基本用法**

```js
<Collapse>
  <CollapseTitle>
    <Icon type="bars" left />
    公共页面
  </CollapseTitle>
  <CollapseBody>
    <Nav>
      <NavLink>
        <span>登录</span>
      </NavLink>
      <NavLink>
        <a
          href="http://fontawesome.io/icons/"
          rel="noreferrer noopener"
          target="_blank"
        >
          报错页面
        </a>
      </NavLink>
    </Nav>
  </CollapseBody>
</Collapse>
```

**三级菜单实现**

```js
<Sidebar>
  <SidebarHeader styleName="justify">
    <Icon type="home" className="fa-lg offset-r offset-r-lg" />
    <span>{'首页'}</span>
  </SidebarHeader>
  <SidebarBody>
    <Nav stacked>
      <Collapse>
        <CollapseTitle>
          <Icon type="home" className="fa-lg offset-r offset-r-lg" />
          {'我是一级菜单'}
        </CollapseTitle>
        <CollapseBody>
          <Nav stacked>
            <Collapse isSecondary>
              <CollapseTitle>{'我是二级菜单'}</CollapseTitle>
              <CollapseBody>
                <Nav stacked>
                  <NavItem eventKey="3-1">
                    <a>{'我是三级菜单'}</a>
                  </NavItem>
                  <NavItem eventKey="3-2">
                    <a>{'我是三级菜单'}</a>
                  </NavItem>
                </Nav>
              </CollapseBody>
            </Collapse>
            <NavItem eventKey="2-2">
              <a>{'我是二级菜单'}</a>
            </NavItem>
            <NavItem eventKey="2-3">
              <a>{'我是二级菜单'}</a>
            </NavItem>
          </Nav>
        </CollapseBody>
      </Collapse>
      <NavItem key={1}>
        <a href="">
          <Icon type="home" className="fa-lg offset-r offset-r-lg" />
          {'我是一级菜单'}
        </a>
      </NavItem>
    </Nav>
  </SidebarBody>
</Sidebar>
```

### 变更记录

v2.1.1-alpha.2

- 新增 isSecondary 属性用于实现三级菜单功能
