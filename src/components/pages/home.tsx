import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import pageStyles from './pageStyle';
import { IPageProps } from '../../interfaces/components';
import LayoutWithMobx from '../withMobx/LayoutWithMobx';

const Home = (props:IPageProps) => {
    const {classes} = props;
    return (
        <LayoutWithMobx>
            <div>
            <h1>首页</h1>
            </div>
            <div >
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
              <img src="https://img.liuxue86.com/ueditor/201803/13/e48baa53c195d435c66e2effe8b86b3a.jpg" alt=""/>
            </div>
           
           
        </LayoutWithMobx>
    )
}

export default withStyles(pageStyles)(Home);