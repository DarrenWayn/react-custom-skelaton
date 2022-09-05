// import React, { useState } from 'react';
// import { createAuthUserWithEmailAndPassword } from '../../../services/firebase';
// import useForm from '../../routes/register/hooks/useForm';

// const useButton = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { email, password } = useForm();

//   // Whatever function is going to do the loading:
//   const onClick = async () => {
//     try {
//       setLoading(true);
//       const userCredential = await createAuthUserWithEmailAndPassword(
//         email,
//         password
//       );
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   return {
//     onClick,
//   };
// };

// export default useButton;
