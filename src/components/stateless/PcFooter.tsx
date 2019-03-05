import React from 'react'
import { Grid, Typography } from '@material-ui/core';

const footers = [
    {
      title: '公司信息',
      description: ['介绍', '最新动态', '联系信息'],
    },
    {
      title: '产品特点',
      description: ['快速低廉', '稳定可靠', '额外收益'],
    },
    {
      title: '资源',
      description: ['常见问题', '官方论坛', '官方博客', '线下活动'],
    },
    {
      title: '政策',
      description: ['隐私条款', '使用条款'],
    },
];
const PcFooter = () => (
    <footer style={
      {
        width: "100%",
        minWidth: '600px',
        textAlign: 'center'
      }
    }>
        <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
                <Grid item xs key={footer.title}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        {footer.title}
                    </Typography>
                    {footer.description.map(item => (
                        <Typography key={item} variant="subtitle1" color="textSecondary">
                            {item}
                        </Typography>
                    ))}
                </Grid>
            ))}
        </Grid>
    </footer>
)

export default PcFooter