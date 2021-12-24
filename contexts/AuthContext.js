<<<<<<< HEAD
import { createContext, useState, useEffect } from "react"
import axios from "axios"
import router from "next/router"

export const AuthContext = createContext()
const API_URL = process.env.NEXT_PUBLIC_API_URL
export const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null)
	const [token, setToken] = useState(null)
	const [error, setError] = useState(false)

	const signinUser = async (signinObject) => {
		axios
			.post(`${API_URL}/auth/local`, signinObject)
			.then((response) => {
				setUser(response.data.user)
				setToken(response.data.jwt)
				saveToken(response.data.jwt)
				router.push("/")
			})
			.catch((error) => {
				setError({ status: true, error })
			})
	}

	const signoutUser = async () => {
		localStorage.removeItem("jwt")
		setUser(null)
		router.push("/")
	}

	const getToken = async () => {
		if ("jwt" in localStorage) {
			const retrievedToken = localStorage.getItem("jwt")
			return retrievedToken
		}
	}

	const saveToken = async (tkn) => {
		localStorage.setItem("jwt", tkn)
		return true
	}

	const signupUser = async (signupObject) => {
		axios
			.post(`${API_URL}/auth/local/register`, signupObject)
			.then((response) => {
				setUser(response.data.user)
				setToken(response.data.jwt)
				saveToken(response.data.jwt)
			})
			.catch((error) => {
				setError({ status: true, error })
			})
		router.push("/")
	}

	const retrieveUser = async () => {
		if ("jwt" in localStorage) {
			const gt = await getToken()

			const requestUser = await fetch(`${API_URL}/users/me`, {
				headers: {
					Authorization: `Bearer ${gt}`,
				},
			})
			await requestUser.json().then((res) => {
				setUser(res)
			})
		} else {
			setUser(null)
		}
	}

	useEffect(async () => {
		retrieveUser()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				token,
				error,
				setError,
				signinUser,
				signoutUser,
				getToken,
				setToken,
				signupUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
=======
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

export const AuthContext = createContext();
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);

  const signinUser = async (signinObject) => {
    axios
      .post(`${API_URL}/auth/local`, signinObject)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.jwt);
        saveToken(response.data.jwt);
        router.push("/");
      })
      .catch((error) => {
        setError({ status: true, error });
      });
  };

  const signoutUser = async () => {
    localStorage.removeItem("jwt");
    setUser(null);
    router.push("/");
  };

  const getToken = async () => {
    if ("jwt" in localStorage) {
      const retrievedToken = localStorage.getItem("jwt");
      return retrievedToken;
    }
  };

  const saveToken = async (tkn) => {
    localStorage.setItem("jwt", tkn);
    return true;
  };

  const signupUser = async (signupObject) => {
    axios
      .post(`${API_URL}/auth/local/register`, signupObject)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.jwt);
        saveToken(response.data.jwt);
      })
      .catch((error) => {
        setError({ status: true, error });
      });
    router.push("/");
  };

  const retrieveUser = async () => {
    if ("jwt" in localStorage) {
      const gt = await getToken();

      const requestUser = await fetch(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${gt}`,
        },
      });
      await requestUser.json().then((res) => {
        setUser(res);
      });
    } else {
      setUser(null);
    }
  };

  useEffect(async () => {
    retrieveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        error,
        setError,
        signinUser,
        signoutUser,
        getToken,
        setToken,
        signupUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
>>>>>>> parent of 5eab0bd (Changes)
