import styled from 'styled-components'

export const ContainerSwitch = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #7CC954;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #7CC954;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 18px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`
