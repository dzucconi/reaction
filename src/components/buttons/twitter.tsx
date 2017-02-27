import * as React from 'react'
import Button, { ButtonProps } from './default'
import Icon from '../icon'
import styled from 'styled-components'

const TwitterButton = (props: ButtonProps) => {
    const icon = <Icon name="twitter" color="white" />
    return (
        <Button {...props} icon={icon}>Log in with Twitter</Button>
    )
}

export default styled(TwitterButton)`
    background: #1D9EF4;
    color: white;

    &:hover:not(:disabled) {
        background: #0D73B6;
    }
`

