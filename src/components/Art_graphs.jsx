import './Art_graphs.css';
import React, { useEffect, useRef } from 'react';

const Art_graphs = () => {
    
      const canvasRef = useRef(null);
      const stars = useRef([]);
      const mouse = useRef({ x: 0, y: 0 });
      const FPS = 20;
      const starCount = 100;
    
      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // Criar as estrelas
        for (let i = 0; i < starCount; i++) {
          stars.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
          });
        }
    
        // Função para desenhar as estrelas e linhas
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = "lighter";
    
          // Desenhar as estrelas
          for (let i = 0; i < stars.current.length; i++) {
            const s = stars.current[i];
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.stroke();
          }
    
          // Desenhar as conexões entre estrelas próximas
          ctx.beginPath();
          for (let i = 0; i < stars.current.length; i++) {
            const starI = stars.current[i];
            ctx.moveTo(starI.x, starI.y);
            if (distance(mouse.current, starI) < 150) ctx.lineTo(mouse.current.x, mouse.current.y);
    
            for (let j = 0; j < stars.current.length; j++) {
              const starII = stars.current[j];
              if (distance(starI, starII) < 150) {
                ctx.lineTo(starII.x, starII.y);
              }
            }
          }
          ctx.lineWidth = 0.05;
          ctx.strokeStyle = 'white';
          ctx.stroke();
        };
    
        // Função para atualizar as posições das estrelas
        const update = () => {
          for (let i = 0; i < stars.current.length; i++) {
            const s = stars.current[i];
            s.x += s.vx / FPS;
            s.y += s.vy / FPS;
    
            // Inverter a direção ao bater nas bordas
            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
          }
        };
    
        // Função para calcular a distância entre dois pontos
        const distance = (point1, point2) => {
          const xs = point2.x - point1.x;
          const ys = point2.y - point1.y;
          return Math.sqrt(xs * xs + ys * ys);
        };
    
        // Função principal para atualizar e desenhar
        const tick = () => {
          draw();
          update();
          requestAnimationFrame(tick);
        };
    
        // Adicionar evento para mover o mouse
        const handleMouseMove = (e) => {
          mouse.current.x = e.clientX;
          mouse.current.y = e.clientY;
        };
    
        // Adicionar listener do mouse
        canvas.addEventListener('mousemove', handleMouseMove);
    
        // Iniciar a animação
        tick();
    
        // Limpeza: remover evento quando o componente desmontar
        return () => {
          canvas.removeEventListener('mousemove', handleMouseMove);
        };
      }, [FPS, starCount]);
    
      return <canvas ref={canvasRef} style={{ display: 'block' }} />;
    };
    
    

export default Art_graphs;

