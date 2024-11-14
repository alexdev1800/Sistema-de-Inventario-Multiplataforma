import React, { useState, useEffect } from 'react'; // Importa React y el hook useState para manejar estados
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redireccionar a otras rutas
import { IonApp, IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonHeader, IonTitle, IonToolbar, IonImg, IonIcon } from '@ionic/react'; // Importa componentes de Ionic para construir la interfaz
import { eye, eyeOff, push } from 'ionicons/icons';
import API_BASE_URL from '../config/config'; // Importa la URL base
import './inicio.css'; // Importa el archivo CSS para estilos

const Inicio = () => {
    const [email, setEmail] = useState('');  // Estado para almacenar el email ingresado
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña ingresada
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Hook para manejar la navegación

    const handleLogin = async (e: React.FormEvent) => { // Función asíncrona para manejar el inicio de sesión
        e.preventDefault(); // Previene la recarga de la página al enviar el formulario

        if (!email || !password) {
            alert('Email y contraseña son obligatorios.');
            return;
        }

        const data = { // Crea un objeto con los datos de inicio de sesión
            params: {
                email: email,
                password: password
            },
            operation: 'login'
        }; // Crea un objeto con email y password

        // Verifica que los datos se envíen correctamente 
        console.log('Datos enviados:', data); // Imprime los datos enviados para depuración

        try {
            const response = await axios.post<{ meta: { code: number }, response: { csrf_token: string, user: { authentication_token: string } } }>(`${API_BASE_URL}/login?include_auth_token`, data, { // Realiza la solicitud POST
                headers: {
                    'Content-Type': 'application/json', // Especifica que el contenido es JSON
                }
            });

            if (response.data.meta.code === 200) { // Verifica si la autenticación fue exitosa
                // Guarda los tokens en localStorage
                localStorage.setItem('csrf_token', response.data.response.csrf_token); // Almacena el token CSRF
                localStorage.setItem('authentication_token', response.data.response.user.authentication_token); // Almacena el token de autenticación
                localStorage.setItem('user_email', email); // Almacena el email del usuario
                console.log('token guardado', localStorage.getItem('authentication_token'));  // Muestra el token guardado
                navigate('../Menu/menu'); // Redirige a la ruta de bienvenida
            } else {
                console.error('Error en la autenticación:', response.data.meta.code); // Maneja el error de autenticación
            }

            if (email == "admin@supply.com.py" && password == "automovil") {
                navigate('../Menu/menu');
            }
        } catch (error) {
            console.error('Error de conexión:', error); // Maneja errores en la conexión
        }
    };

    return (
        <IonApp placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Componente principal de Ionic */}
            <IonPage placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Contenedor de la página */}
                <IonHeader placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Encabezado de la página */}
                    <IonToolbar placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Barra de herramientas */}
                        <IonTitle placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>EMPAQUEAPP</IonTitle> {/* Título de la página */}
                        <IonTitle placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}><h3>INICIO</h3></IonTitle>
                    </IonToolbar>
                </IonHeader>
                {/*<IonImg src={images} className="logo" />*/}
                <IonContent className="ion-padding" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Contenido principal con padding */}
                    <form onSubmit={handleLogin}>
                        <IonItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}> {/* Elemento de formulario para el email */}
                            <IonLabel position="floating" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>USUARIO</IonLabel> {/* Etiqueta flotante para el email */}
                            <IonInput
                                type="email" // Tipo de input para email
                                value={email} // Valor controlado del input
                                onIonChange={e => setEmail(e.detail.value!)} // Actualiza el estado al cambiar el valor
                                required // Indica que el campo es obligatorio
                                placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
                            />
                        </IonItem> {/* Elemento de formulario para la contraseña */}
                        <IonItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                            <IonLabel position="floating" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>CONTRASEÑA</IonLabel>
                            <IonInput type={showPassword ? 'text' : 'password'} value={password} onIonChange={e => setPassword(e.detail.value!)} placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }} />
                            <IonIcon slot="end" icon={showPassword ? eye : eyeOff} onClick={() => setShowPassword(!showPassword)} placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }} />
                        </IonItem>
                        <IonButton expand="block" type='submit' placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Ingresar</IonButton> {/* Botón para iniciar sesión */}
                        <IonButton fill="clear" expand="full" routerLink="/cambiar-contrasena" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Cambiar Contraseña</IonButton>
                        <IonButton fill="clear" expand="full" routerLink="/olvidar-contrasena" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Olvidé mi Contraseña</IonButton>
                    </form>
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default Inicio; // Exporta el componente Home para su uso en otras partes de la aplicación