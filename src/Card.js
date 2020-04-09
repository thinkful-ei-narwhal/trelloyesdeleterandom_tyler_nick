import React from 'react';
import './cardStyles.css'

export default class Card extends React.Component {

  //props
  // key={card.id}
  // id={card.id}
  // cardIndex={cardIndex}
  // listId={listId}
  // title={card.title}
  // content={card.content}
  // deleteCardEvent={this.props.deleteCardEvent}

  render() {
    return (
      <div className='Card'>
        <button type='button' onClick={() => { this.props.deleteCardEvent(this.props.listId, this.props.cardIndex) }}>delete</button>
        <h3>
          {this.props.title}
        </h3>
        <p>
          {this.props.content}
        </p>
      </div>
    );
  }
}

