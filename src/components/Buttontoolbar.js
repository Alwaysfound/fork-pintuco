import React from 'react';

function Buttontoolbar(){
    return (
        <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
            <button type="button" class="btn btn-secondary">8</button>
            <button type="button" class="btn btn-secondary">9</button>
            <button type="button" class="btn btn-secondary">10</button>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Buttontoolbar/>
    );
}