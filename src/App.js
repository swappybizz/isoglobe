import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import earth from "./earth.jpg";
import "./App.css";

function Sphere() {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, earth);
  // const font = useLoader(FontLoader, thefont)

  useFrame(() => {
    mesh.current.rotation.y += 0.0015;
  });

  return (
    <>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[1.25, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>{" "}
      {/* <Text
        position={[0, 0, 4.5]}
        fontSize={0.075}
        // make it bold

        color="black"
        anchorX="center"
        anchorY="middle"
        rotation={[0, -0.1, 0]}
        // font={font}
      >
        ISO
      </Text> */}
    </>
  );
}

export default function App() {
  const radius = 200;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const texts = [
    "Data & KPI",
    "Sales & marketing",
    "Value Addition",
    "Resources",
    "Compliance",
    "Context Analysis",
    "Policy",
    "Management",
  ];
  const text2 = [
    " ISO 9001:2015 requires organizations to determine, monitor and measure output.\nThe standard doesn’t prescribe how or when you should monitor or measure your quality management system,\nand how to analyze and evaluate your key performance indicator data",
    "ISO9001:2015 states the marketing and sales activities of an organization should be planned and\nimplemented to meet customer requirements and to achieve the organization’s objectives.\nThis includes the development of marketing and sales strategies, plans and programs.",
    "This is your main Activity in your organization.\n This is where you add value to your customers. This is where you make money",
    "Resources are the people, equipment, materials, information and other assets that an organization needs to achieve its objectives.\nISO 9001:2015 requires organizations to determine the resources needed to achieve its objectives and to manage these resources effectively.",
    "Compliance is the core to any quality management system. ISO 9001:2015 requires organizations to determine, monitor and measure output.\nThe standard doesn’t prescribe how or when you should monitor or measure your quality management system,\nand how to analyze and evaluate your key performance indicator data",
    "Determining organizational context is a requirement new to ISO 9001:2015\n that helps to underpin your organization’s policies and to provide a road map to achieve future goals",
    "ISO 9001:2015 requires top management to establish a quality policy supporting the organization’s strategic direction and available to interested parties.",
    "ISO 9001:2015 promotes evidence-based decision making for management decisions.",
  ];
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgrey",
      }}
    >
      <Canvas background="darkgrey">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Canvas>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const x = centerX + radius * 1.9 * Math.cos(angle);
        const y = centerY + radius * 1.3 * Math.sin(angle);
        return (
          <>
            <div
            title={text2[i]} 
              key={i}
              style={{
                position: "absolute",
                left: x - 30,
                top: y - 45,
                width: "fit-content",

                alignContent: "center",
                justifyContent: "center",
                display: "flex",

                // borderRadius: 10,
                cursor: "pointer",
                // make right border top to bottom gradient between white and black

                // padding: 10
                MarginX: 0,
              }}
            >
              <p className="buttonText">{texts[i]}</p>
            </div>
          </>
        );
      })}
      <p
        style={{
          position: "absolute",
          fontSize: 30,
          fontWeight: "bold",
          // underline
          textDecoration: "underline",
        }}
      >
        ISO 9001:2015
      </p>
    </div>
  );
}
