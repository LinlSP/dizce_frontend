import React from 'react'
/// //////////////////Styles
/// //////////////////Resources and Components
/// //////////////////Self
///setting the height
const windowWidth = window.innerWidth

var defaultVh = 784

if(windowWidth > 900 && windowWidth < 1201){
  defaultVh = 900

}else if(windowWidth > 1200 && windowWidth < 1801){
  defaultVh = 1050

}else if(windowWidth > 1800){
  defaultVh = window.innerHeight
}

var vh = defaultVh*0.01
///

export const Resources = () => {

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
