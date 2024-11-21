import {Component} from 'react'
import {
  MemeContainer,
  Heading,
  ImageContainer,
  MemeContent,
  FormContainer,
  InputContainer,
  Label,
  Input,
  Button,
  Para,
  Heading2,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    toptext: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    showMeme: true,
    imageUrlDisplayed: '',
    topTextDisplayed: '',
    bottomTextDisplayed: '',
    fontSizeDisplayed: fontSizesOptionsList[0].optionId,
  }

  submitButton = event => {
    event.preventDefault()
    const {toptext, bottomText, imageUrl, fontSize} = this.state
    console.log(toptext)
    this.setState({
      topTextDisplayed: toptext,
      bottomTextDisplayed: bottomText,
      imageUrlDisplayed: imageUrl,
      showMeme: true,
      fontSizeDisplayed: fontSize,
    })
  }

  getImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  getTopText = event => {
    this.setState({toptext: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getFontSize = event => {
    this.setState({fontSize: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {
      imageUrlDisplayed,
      topTextDisplayed,
      bottomTextDisplayed,
      fontSizeDisplayed,
      showMeme,
    } = this.state
    return (
      <MemeContainer>
        <Heading>Meme Generator</Heading>
        <MemeContent>
          {showMeme ? (
            <ImageContainer imageUrl={imageUrlDisplayed} data-testid="meme">
              <Para fontSize={fontSizeDisplayed}>{topTextDisplayed}</Para>
              <Para fontSize={fontSizeDisplayed}>{bottomTextDisplayed}</Para>
            </ImageContainer>
          ) : null}
          <FormContainer>
            <Heading2 className="heading2">Meme Generator</Heading2>
            <InputContainer>
              <Label htmlFor="image">Image Url</Label>
              <Input
                id="image"
                type="text"
                placeholder="Enter the Image URL"
                onChange={this.getImage}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="top">Top Text</Label>
              <Input
                id="top"
                type="text"
                placeholder="Enter the top text"
                onChange={this.getTopText}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="bottom">Bottom Text</Label>
              <Input
                type="text"
                placeholder="Enter the bottom text"
                onChange={this.getBottomText}
                id="bottom"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="font">Font Size</Label>
              <Input
                as="select"
                onChange={this.getFontSize}
                id="font"
                value={fontSizeDisplayed}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <option
                    value={eachItem.optionId}
                    width="100%"
                    key={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </option>
                ))}
              </Input>
            </InputContainer>
            <Button type="submit" onClick={this.submitButton}>
              Generate
            </Button>
          </FormContainer>
        </MemeContent>
      </MemeContainer>
    )
  }
}
export default MemeGenerator
