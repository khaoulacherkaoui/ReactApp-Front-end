import React from 'react';
import './card.css';
import { Person, GitHub, Mail, LinkedIn, Phone } from "@material-ui/icons";

//Card contain personnal info
function Card(){
    return (
      <div className='DataList'>
        <div>
          <div class="card">
            <div class="card2">
              <div class="user">
                <Person/>
                <div class="user__info">
                  <h5>Name</h5>
                  <small>Cherkaoui Khaoula</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
              <div class="user">
                <Mail/>
                <div class="user__info">
                  <h5>Mail</h5>
                  <small>khaoulacherkaoui99@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
              <div class="user">
                <Phone/>
                <div class="user__info">
                  <h5>Phone</h5>
                  <small>+212 652570604</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
              <div class="user">
                <GitHub/>
                <div class="user__info">
                  <h5>GitHub</h5>
                  <small>https://github.com/khaoulacherkaoui</small>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card2">
              <div class="user">
                <LinkedIn/>
                <div class="user__info">
                  <h5>LinkedIn</h5>
                  <small>linkedin.com/in/khaoulacherkaoui</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
}

export default Card;