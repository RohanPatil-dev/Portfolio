import Experience from "./Experience";
import Skills from "./Skills";

export default function Containers() {
    return (
        <>
            <div class="container-xxl py-6 pb-5" id="skill">
                    <div class="row g-5">
                        <Skills/>
                        <Experience/>
                    </div>
            </div>

        </>
    )
}