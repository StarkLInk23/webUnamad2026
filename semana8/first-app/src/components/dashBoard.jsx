import { useState, useEffect } from 'react';
import axios from 'axios';

// 1. Definimos las coordenadas reales para cada ciudad
const COORDENADAS_CIUDADES = {
    Lima: { lat: -12.0464, lon: -77.0428 },
    Madrid: { lat: 40.4168, lon: -3.7038 },
    Miami: { lat: 25.7617, lon: -80.1918 }
};

export function DashboardClima() {
    const [ciudad, setCiudad] = useState('Lima');
    const [datosClima, setDatosClima] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtenemos las coordenadas de la ciudad seleccionada
        const coordenadas = COORDENADAS_CIUDADES[ciudad];

        if (!coordenadas) return;

        setCargando(true);
        setError(null);

        // 2. Inyectamos dinámicamente la latitud y longitud correctas en la URL
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordenadas.lat}&longitude=${coordenadas.lon}&current_weather=true`)
            .then((response) => {
                const data = response.data;

                // Validamos que la API nos devuelva la propiedad esperada
                if (data && data.current_weather) {
                    setDatosClima({
                        ciudad: ciudad,
                        temperatura: data.current_weather.temperature,
                        viento: data.current_weather.windspeed
                    });
                } else {
                    throw new Error("Estructura de datos inesperada");
                }
                setCargando(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Ocurrió un error al obtener el clima");
                setCargando(false);
            });

    }, [ciudad]);

    return (
        <div style={{ padding: '20px', marginTop: '10px', border: '2px solid #3f51b5', borderRadius: '8px', color: '#333', background: '#fff' }}>
            <h3>Dashboard Climático Real (Axios)</h3>

            <label style={{ marginRight: '10px' }}>Selecciona una Ciudad: </label>
            <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} style={{ padding: '5px', borderRadius: '4px' }}>
                <option value="Lima">Lima (Perú)</option>
                <option value="Madrid">Madrid (España)</option>
                <option value="Miami">Miami (EE.UU.)</option>
            </select>

            {/* Control visual de estados para evitar pantallas en blanco */}
            {cargando && <p style={{ color: '#3f51b5', marginTop: '15px' }}>Consultando satélite meteorológico...</p>}

            {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

            {!cargando && !error && datosClima && (
                <div style={{ marginTop: '15px', padding: '15px', background: '#f5f5f5', borderRadius: '6px', borderLeft: '5px solid #3f51b5' }}>
                    <h4>Clima en tiempo real para: {datosClima.ciudad}</h4>
                    <p>Temperatura actual: <strong>{datosClima.temperatura} °C</strong></p>
                    <p>Velocidad del viento: <strong>{datosClima.viento} km/h</strong></p>
                </div>
            )}
        </div>
    );
}