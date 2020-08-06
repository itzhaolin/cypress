#### 1. 新建一个项目或文件夹
#### 2. 拖拽或添加进cypress客户端
#### 2. 在integration目录下创建 `my_first_cypress.spec.js`
#### 3. 在cypress中`run`


```bash
describe('my first test', function() {
    it('visit baidu and fill input', function() {
        cy.visit('http://www.baidu.com')

        // cy.pause() // 暂停

        cy.get('#kw').type('Cypress').should('have.value', 'Cypress')
        cy.get('#su').click()
    })
})
```