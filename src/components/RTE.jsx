import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RTE({name, control, label, defaultValue=''}) {
    return (
        <div className='w-full'>
            {label&& <label className='inline-block mb-1 pl-1'> {label}</label>}
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
            apiKey='hdmjar47tgqbifdbct2rwgfmjf6exhn6cj1dnch63lrd1csn'
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic | forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullsit numlist outdent indent | removeformat | left",
                content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size14px }" 

            }}
            onEditorChange={onChange}
            />
        )}
        />
        </div>
        
    )
}


