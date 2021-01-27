import React from 'react';

type Props = {
  title: string
}

export const Header: React.FC<Props> = (props) => {
  return (
    <>
      <header>
        {props.title}
      </header>
    </>
  )
}
