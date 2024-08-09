import React from "react"

export default function Copyright() {
    return (
        <>
            <div class="copyright bg-gray">
                <div class="p-2">
                    <div class="text-center">
                            <p class="p-small">Copyright © {new Date().getFullYear()} | This template is made with ♡ React.JS</p>
                    </div>
                </div>
            </div>
        </>
    )
}