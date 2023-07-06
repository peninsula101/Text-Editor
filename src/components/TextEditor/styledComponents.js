import styled from 'styled-components'

export const EditorBgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditCardContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  width: 80vw;
  display: flex;
  padding: 20px;
`

export const TextEditLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
`
export const TextEditorHeading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 35px;
  text-align: center;
`
export const TextEditorImg = styled.img`
  height: 320px;
  width: 320px;
`
export const TextEditRight = styled.div`
  background-color: #25262c;
  border: solid 1px #334155;
  width: 50vw;
  border-radius: 10px;
`

export const StylesContainer = styled.ul`
  padding: 10px;
  display: flex;
  list-style-type: none;
`

export const HorizontalLine = styled.hr`
  border: solid 1px #334155;
  margin: 0;
`

export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
`

export const TextEditorInput = styled.textarea`
  background-color: transparent;
  border-style: none;
  outline: none;
  height: 60vh;
  width: 40vw;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  color: #f8fafc;
  font-family: 'Roboto';
  padding: 10px;
  font-size: 20px;
`

export const ListItem = styled.li``
