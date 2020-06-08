import React, { useContext, useState, useEffect} from 'react'
import {Context} from '../Context'
////////////////////////////////////////////////////////////////////////////////////Styles
import {BigContainerGlobal} from '../styles/global/Globalstyles'
import { Container, PlaceHolder} from '../styles/pages/StyleServices'
////////////////////////////////////////////////////////////////////////////////////Resources and Components
import bg from '../assets/servicesBg.svg'
////////////////////////////////////////////////////////////////////////////////////Self
///setting the height
const windowWidth = window.innerWidth

var defaultVh = 684
if(windowWidth > 350 && windowWidth < 1701){
  defaultVh = 784
}else if(windowWidth > 1700){
  defaultVh = window.innerHeight
}

var vh = defaultVh*0.01
///

const selfName = 'services'

export const Services = () => {
  const { Header, isLanguage } = useContext(Context)
  const [textData, setTextData] = useState('')

  //////////////////Importing Text from JSON - function
  const importTextFromJson = () => {
    import(`../languages/${isLanguage}/${selfName}.json`)
      .then(({ default: myData }) => {
        setTextData(myData);
      })
      .catch(error => {
        console.log(error)
        setError(true)
      });
  }
  ///////////

  useEffect(() => {
    importTextFromJson()

  }, [])

  //////////////////PAGE

  if (textData === '') return <PlaceHolder bg={bg}/>

  const { services } = textData

    return(<>
        <Header/>
        <BigContainerGlobal bg={`url(${bg}) no-repeat center`} bgsize='cover'>
          <div className="container">
            <Container>
              {services[0].type}
            </Container>
          </div>
        </BigContainerGlobal>
    </>)
}