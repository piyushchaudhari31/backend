import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import '../component/Facedetection.css'
import axios from 'axios'

export default function FaceDetection({setsong}) {
  const videoRef = useRef(null);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error starting video:", err));
  };

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      startVideo();
    };
    loadModels();
  }, []);

  const faceDetect = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      console.log("No face detected");
      return;
    }

    const expressions = detections[0].expressions;
    let mostProbable = 0;
    let _expression = "";

    for (const expression in expressions) {
      if (expressions[expression] > mostProbable) {
        mostProbable = expressions[expression];
        _expression = expression;
      }
    }

    axios.get(`http://localhost:3000/songs?mood=${_expression}`).then((res)=>{
      console.log(res.data);
      setsong(res.data.song)
      
    })
  };


  return (
    <div className="facedetection">
      <video
        ref={videoRef}
        autoPlay
        muted
        width="720"
        height="560"
        className="user_video_Feed"
      />
      <button onClick={faceDetect} >Capture photo</button>
    </div>
  );
}
