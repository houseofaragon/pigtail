/*eslint-disable */
import React from 'react'
import { Link } from 'react-router'

const Person = (props) => (
  <Link to={`/person/${props.sponsor_id}`}>
    <p>{props.sponsor.first_name} {props.sponsor.last_name}</p>
  </Link>
)

Person.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.number,
  sponsor: React.PropTypes.object,
  sponsor_id: React.PropTypes.string
}

export default Person
