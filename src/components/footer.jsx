import React from 'react'

export default () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <a target="_blank" title="github repository" href='http://github.com/alpfreda'>
                        <img src="data:image/png;base64,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" width='30' />
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/alpfreda" title='Linkedin Account' className="linkedin">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACJ0lEQVRoge2XTWsTURSGn3Mn6WQVwUXFgIuC+EHxayHWj18guIi46o8QWhGrtbWWgi1CF9W/4E60GxHdiAiuRIgiogERIthNq1Sa2Jre40L8IDPpJNPOxMB9lueec3gfJrmZgMPh6GoktDr7ZrtZq48DRaAALIDctzZ7nSv7F9MMGEVQ4Ff458DekP731rfHGDryNfFkLWIChbX6GOHhAfaYVTOabKT2CAgAZyNmikkEiUuYwM6ImV1JBIlLUEBY2HBC+ZxUmDgEBZR7ERN3kwoTh4CA7clMAuUm/W9tj51KNlJ7BJ/AcP+Szfw4gept4BNQBz6CzFqVk//TFepwbAGBVwkzXdKoITtyaPNzMy8LRr1BgTMq9KH0AosCHxR9YOveHa4eqETtzEQ1bDlzZd+s1EZRHQGyCvBXvaBQADllMvYaM6VbtpYfZ6Lve7N1Yb/EyTH9YptXrT1DdAzIRnTnUC56ueUn3Cz1NmtKVcCT7ENFj7YzozDgWeaZK/th56kKqHI87pyprkyGnaX7EdoUcp6p14EXyS4SIGc8HWwspi8gVEQ5Z8XPW/HzIlIE3rU0Knq6sZbuNSpUbDZzmOH+pd+ldZjnxqunxmgJ3fi/hsLuxlqqT0AsQ/+G/8Plg1/EyoUWVuxoLKQqsG78x03PVquPWljhNRbS/Q5c2vet6dnEwHKcld10C4XiBDqNE+g0TqDTOIFO4wQ6jRPoNF0v4HA4upyfMJeU0xZf9lEAAAAASUVORK5CYII=" width='30' />
                    </a>
                </div>
            </div>
        </div>
    )
}
