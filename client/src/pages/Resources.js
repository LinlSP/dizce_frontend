import React from 'react'
////////////////////////////////////////////////////////////////////////////////////Styles
////////////////////////////////////////////////////////////////////////////////////Resources and Components
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


export const Resources = () => {
  
//////////////////PAGE
  return(<>

  Resources

  </>)
}

// const toAuthor = () =>{
//   switch(lngnow){
//     case 'spanish':
//       window.location.href='https://commons.wikimedia.org/w/index.php?curid=69323596';
//       break;
//     case 'english':
//       window.location.href='https://commons.wikimedia.org/w/index.php?curid=3146597';
//       break;
//     case 'german':
//       window.location.href='https://commons.wikimedia.org/w/index.php?curid=41430056';
//       break;
//     default:
//       return
//   }
// }
