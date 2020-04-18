import React from 'react';

const renderElementConfiguration = (element) => {
  if (element.configured) {
    return <p data-id="already-added-chip">Configured</p>
  }

  return <button data-id="add-element-button">Configure</button>
}

function App() {
  const elements = [
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
    { title: 'A', configured: true },
    { title: 'B', configured: true },
    { title: 'C', configured: true },
    { title: 'D', configured: false },
  ]
  return (
    <div data-id="elements-list">
      {elements.map(element =>
        <div class="grid__row grid--gutters-horizontal grid--gutters-vertical">
            <div class="grid__column grid__column--25">
                <div class="card -full-height" data-card="element-card">
                    <header class="header -borderless">
                        <div class="header__container">
                            <div class="grid -no-padding">
                                <div>
                                    <div class="grid__row">
                                        <div class="grid__column">
                                            <h2 data-id="element-card-title">{element.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <footer class="card__footer">
                        <div class="grid -no-padding">
                            <div class="grid__row">
                                <div class="grid__column -push-right">
                                    <div class="-push-v-center -push-right">
                                    {
                                      renderElementConfiguration(element)
                                    }
                                   </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
