import React from 'react'

const Button2 = ({classnAme,wid,text,funcbtn}) => {
  return (
    <div>
        <button className={classnAme} width={wid}  onClick={funcbtn} > {text} </button>
    </div>
  )
}

export default Button2