import '../../style/main/Programms.css';
import React from 'react'
import Figma from "../../img/img/program/figma.png";
import Photoshop from "../../img/img/program/photoshop.png";
import Illustrator from "../../img/img/program/illustr.png";
import VsCode from "../../img/img/program/vscode.png";
import Github from "../../img/img/program/github.png";
import Tilda from "../../img/img/program/tilda.png";
import Bootstrap from "../../img/img/program/bootstrap.png";
import Sketchbook from "../../img/img/program/sketchbook.png";
import Leonardo from "../../img/img/program/leonardo.png";

const Programms = () => {
    return (
        <section class="program center930 slide-in-blurred-bottom">

            <div class="program-block bold"><img src={Figma} alt="фигма" class="program-img" />FIGMA
            </div>
            <div class="program-block nobold"><img src={Photoshop} alt="фотошоп"
                class="program-img" />Adobe
                Photoshop</div>
            <div class="program-block nobold"><img src={Illustrator} alt="иллюстратор"
                class="program-img" />adobe illustrator</div>
            <div class="program-block nobold20"><img src={VsCode} alt="вскод" class="program-img" />vs
                code
            </div>
            <div class="program-block nobold20"><img src={Github} alt="гитхаб"
                class="program-img" />github
            </div>
            <div class="program-block nobold20"><img src={Tilda} alt="тильда"
                class="program-img" />tilda
            </div>
            <div class="program-block bold"><img src={Bootstrap} alt="бустрап"
                class="program-img" />bootstrap</div>
            <div class="program-block bold"><img src={Sketchbook} alt="скечбук"
                class="program-img" />sketchbook</div>
            <div class="program-block nobold20"><img src={Leonardo} alt="леонардо"
                class="program-img" />Leonardo</div>

            <div class="program-btn"><a href="about_me.html">ПОРТФОЛИО</a></div>
        </section>
    )
}

export default Programms;