import styled from 'styled-components'
import useGetTodos from './useGetTodos'
import { List, Row } from 'antd'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
`

const Example = () => {
  const { data, isLoading, error } = useGetTodos()

  if (isLoading) {
    return null
  }

  return (
    <Container>
      <List
        size='small'
        header={
          <Row justify='space-around' style={{ width: '100%' }}>
            <p>id</p>
            <p>text</p>
            <p>description</p>
          </Row>
        }
        footer={<div style={{ textAlign: 'center' }}>Footer</div>}
        bordered
        dataSource={data?.todos}
        renderItem={item => (
          <List.Item>
            <Row justify='space-around' style={{ width: '100%' }}>
              <p>{item.id}</p>
              <p>{item.text}</p>
              <p>{item.description}</p>
            </Row>
          </List.Item>
        )}
      />
    </Container>
  )
}

export default Example
