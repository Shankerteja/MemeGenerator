// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const Heading = styled.h1`
  color: #0b69ff;
  font-family: Roboto;
  display: block;
  @media screen and (min-width: 786px) {
    display: none;
  }
`
export const Heading2 = styled.h2`
  display: none;
  color: #0b69ff;
  font-family: Roboto;
  @media screen and (min-width: 786px) {
    display: block;
  }
`
export const ImageContainer = styled.div`
  background-image: url('${prop => prop.imageUrl}');
  background-size: cover;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 786px) {
    width: 500px;
  }
`
export const MemeContent = styled.div`
  width: 85%;
  @media screen and (min-width: 786px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
export const Para = styled.p`
  font-family: Roboto;
  color: white;
  font-size: ${prop => prop.fontSize}px;
`
export const FormContainer = styled.form`
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 786px) {
    order: -1;
    width: 400px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #5a7184;
  font-family: Open Sans;
  font-weight: bold;
`
export const Input = styled.input`
  border: 1px solid #d7dfe9;
  padding: 10px 14px;
  margin-top: 7px;
  border-radius: 5px;
  outline: none;
  font-family: Open Sans;
  width: 100%;
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px 33px;
  font-family: Roboto;
  border-radius: 5px;
`
