import React from 'react';
import levelConfig from "./Activity/config/config"
import defaultBackgroundActivity from './IotaComponents/assets/Background/Fond_activite.svg';
import NavBar from './IotaComponents/Molecules/NavBar';
import NavBarStudentProfil from './IotaComponents/Molecules/NavBarStudentProfil';
import ActivityHeader from './IotaComponents/Molecules/ActivityHeader';
import PageActivity from './IotaComponents/Molecules/PageActivity';
import './IotaComponents/layout.css';
import './IotaComponents/iota-components.css';
import './IotaComponents/common.css';
import './IotaComponents/activity-views.css';

const App = () => {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <NavBar
        profile={
          <NavBarStudentProfil />
        }
      />
      <div
        id="StudentLayout"
        className="row m-0 p-0 background-cover"
        style={{
          height: 'calc(100vh - var(--navbar-height))',
        }}
      >
        <div className="layout-main-content">
      <PageActivity>
          <div className="activity-level-header">
            <ActivityHeader
              level={1}
              title={"TEST"}
                instruction={'Il faut que tu trouves comment complèter et assembler les composants pour suivre le modèle présent dans le dossier model_integration.'}
            />
          </div>
        <div
          className="activity-level-activity col-flex-centered background-cover"
          style={{
            borderRadius: `0 25px 0 0`,
            backgroundImage: `url("${defaultBackgroundActivity}")`,
          }}
        >
          <div className="activity-level-activity-content">
            {levelConfig.component({
              level: 1,
              data: levelConfig.data,
            })}
          </div>
        </div>
      </PageActivity>
      </div>
    </div>
    </>
  );
}

export default App;
