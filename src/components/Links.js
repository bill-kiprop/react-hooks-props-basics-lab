import React from 'react'

function Links(props){
    return (
      <div>
        <h3>Links</h3>
      <a href="https://github.com/bill-kiprop">{props.github}</a>
      <a href="https://www.linkedin.com/feed/">{props.linkedin}</a>
      </div>
    )
  }

  export default Links