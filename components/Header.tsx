import React from 'react';

type Props = {
  title: string
}

export function Header(props: Props) {
  return (
    <>
      <header>
        {props.title}
      </header>
    </>
  )
}
