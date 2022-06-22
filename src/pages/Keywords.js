import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Keywords() {
  return (
    <div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">With textarea</span>
        </div>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  )
}

export default Keywords