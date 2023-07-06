import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  EditorBgContainer,
  TextEditCardContainer,
  TextEditLeft,
  TextEditorHeading,
  TextEditorImg,
  TextEditRight,
  StylesContainer,
  ListItem,
  Button,
  HorizontalLine,
  TextEditorInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isItalicActive: false,
    isBoldActive: false,
    isUnderLineActive: false,
    textInputValue: '',
  }

  changeBoldStatus = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  changeItalicStatus = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  changeUnderLineStatus = () => {
    this.setState(prevState => ({
      isUnderLineActive: !prevState.isUnderLineActive,
    }))
  }

  onChangeText = event => {
    this.setState({
      textInputValue: event.target.value,
    })
  }

  render() {
    const {
      isItalicActive,
      isBoldActive,
      isUnderLineActive,
      textInputValue,
    } = this.state

    return (
      <EditorBgContainer>
        <TextEditCardContainer>
          <TextEditLeft>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditLeft>
          <TextEditRight>
            <StylesContainer>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeBoldStatus}
                  data-testid="bold"
                  color={isBoldActive}
                >
                  <VscBold size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeItalicStatus}
                  data-testid="italic"
                  color={isItalicActive}
                >
                  <GoItalic size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeUnderLineStatus}
                  data-testid="underline"
                  color={isUnderLineActive}
                >
                  <AiOutlineUnderline size={30} />
                </Button>
              </ListItem>
            </StylesContainer>
            <HorizontalLine />
            <TextEditorInput
              type="text"
              value={textInputValue}
              onChange={this.onChangeText}
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderLineActive}
            />
          </TextEditRight>
        </TextEditCardContainer>
      </EditorBgContainer>
    )
  }
}

export default TextEditor
