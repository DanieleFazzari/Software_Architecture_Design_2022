import fetch from 'node-fetch';

import { authServiceIp, authServicePort } from '../config.js';

const authServerIp = authServiceIp;
const authServerPort = authServicePort;

export default class AuthServiceConnection{
    async registerRequest(userName, password, email, puk, prk){
        var response = await fetch(`http://${authServerIp}:${authServerPort}/register`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
                email: email,
                puk: puk,
                prk: prk
            })
        })
        response = await response.json()
        return response;
    }
    async loginRequest(userName, password){
        var response = await fetch(`http://${authServerIp}:${authServerPort}/login`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        })
        response = await response.json()
        return response;
    }
    async logoutRequest(id, token){
        var response = await fetch(`http://${authServerIp}:${authServerPort}/logout`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        response = await response.json()
        return response;
    }
    async checkToken(id, token){
        var response = await fetch(`http://${authServerIp}:${authServerPort}/checkToken`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        response = await response.json()
        return response.ok;
    }

    async activateAccount(id){
        var response = await fetch(`http://${authServerIp}:${authServerPort}/activate`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
        response = await response.json()
        return response.ok;
    }
}


