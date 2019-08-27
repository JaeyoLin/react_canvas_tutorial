/* eslint-disable arrow-body-style */
import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
// import PropTypes from 'prop-types';

/**
 * Component - Canvas
 *
 * @returns
 */
const Canvas = () => {
  const canvasRef = useRef(null);

  const [toggle, setToggle] = useState(true);

  /**
   * drawCanvas
   *
   *
   */
  const drawCanvas = () => {
    console.log('drawCanvas');

    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 1024, 768);

    // ctx.fillRect(0, 0, 100, 100);
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 55, 50);

    ctx.fillStyle = 'rgba(0, 150, 136, 1)';
    ctx.fillRect(100, 25, 100, 100);
    ctx.clearRect(120, 45, 60, 60);
    ctx.strokeRect(125, 50, 50, 50);

    ctx.fillStyle = 'rgba(255, 193, 7, 1)';
    ctx.beginPath();
    ctx.moveTo(10, 100);
    ctx.lineTo(50, 150);
    ctx.lineTo(50, 100);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(275, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(310, 75);
    ctx.arc(275, 75, 35, 0, Math.PI, false);
    ctx.moveTo(265, 65);
    ctx.arc(260, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(295, 65);
    ctx.arc(290, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.fillStyle = 'rgba(0, 188, 212 ,1)';
    ctx.beginPath();
    ctx.moveTo(25, 225);
    ctx.lineTo(105, 225);
    ctx.lineTo(25, 305);
    ctx.fill();

    ctx.strokeStyle = 'rgba(63, 81, 181, 1)';
    ctx.beginPath();
    ctx.moveTo(125, 325);
    ctx.lineTo(125, 245);
    ctx.lineTo(45, 325);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'rgba(149, 117, 205, 1)';
    for (let i = 0 ; i < 4 ; i++) {
      for (let j = 0 ; j < 3 ; j++) {
        ctx.beginPath();
        const x = 25 + j * 50;
        const y = 25 + i * 50;
        const radius = 20;
        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2;
        const anticlockwise = (i % 2 === 0) ? false : true;

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);

    // const img = new Image();
    // img.src = 'https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    // ctx.drawImage(img, 400, 300);
    ctx.beginPath();
    circle.moveTo(300, 300);
    if (toggle) {
      ctx.lineTo(350, 400);
      ctx.lineTo(350, 420);
    } else {
      ctx.lineTo(350, 500);
      ctx.lineTo(350, 520);
    }
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    drawCanvas();
  }, [toggle]);

  /**
   * return
   *
   */
  return (
    <>
      <canvas
        ref={canvasRef}
        width="1024"
        height="768"
        style={{ border: '1px solid #263238', cursor: 'pointer' }}
        onClick={() => {
          console.log('toggle', toggle);
          setToggle(!toggle);
        }}
      />
    </>
  );
};

Canvas.propTypes = {};

Canvas.defaultProps = {};

export default Canvas;
