import React,{useState, useEffect, useContext} from 'react'
import { Context } from '../Context'

/// //////////////////Styles
import {Container} from '../styles/components/StyleHeader'
/// //////////////////Resources and Components
/// //////////////////Self
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
const selfName = 'header'

export const Header = (props) =>{
  const {languages} = useContext(Context)
  const [textData, setTextData] = useState('')

  useEffect(() => {
    import(`../languages/${props.language}/${selfName}.json`)
      .then(({default: myData}) => {
        setTextData(myData);
      })
      .catch(error=>{
        console.log(error)
        setError(true)
      });


  }, [])

  if(textData === '') return <div></div>

  const {pagename} = textData

  return(<>
    {
      pagename.map((name, index)=>(
        <div key={index}>
          {name}
        </div>
      ))
    }
  </>)
}