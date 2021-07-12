import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles(() => ({
    root: {
        width: 250,
        boxShadow: '0px 6px 8px 10px #cce',
        transition: 'all .2s ease-in-out',
        cursor: 'pointer',

        '&:hover': {
            transform: 'scale(1.07)',
        },
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
}))

const Product = ({
    name = 'IPhone 12',
    price = '84000',
    imageUrl = 'https://picsum.photos/200/300',
    productId,
}) => {
    const classes = useStyles()

    const handleAddToCart = () => {}

    const handleClick = () => {}

    return (
        <>
            <Card className={classes.root} onClick={handleClick}>
                <CardHeader
                    style={{ paddingBottom: 0 }}
                    title={name}
                    subheader='by Apple'
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={name}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <Typography
                        variant='h6'
                        color='textSecondary'
                        component='p'
                    >
                        {price}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        4.5/5
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{ paddingTop: 0 }}>
                    <IconButton aria-label='share'>
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        aria-label='add-to-cart'
                        style={{
                            marginLeft: 70,
                        }}
                        onClick={handleAddToCart}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Product
