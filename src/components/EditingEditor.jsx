import React, { useEffect, componentDidMount } from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, createEditorState } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import './styles.scss';

export 