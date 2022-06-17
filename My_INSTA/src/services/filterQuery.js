import { isNumber } from 'lodash'

export function filterQuery(listFiles, searchQuery) {
    if (listFiles && searchQuery?.length > 2 ){
        var filtered = listFiles.filter(title=>
        {
                if (title.title){
                    const titleResult = (title.title).toLowerCase().includes(searchQuery.toLowerCase())
                    if (titleResult) {
                        return titleResult
                    }
                }
                if (title.username){
                    const usernameResult = (title.username).toLowerCase().includes(searchQuery.toLowerCase()) 
                    if (usernameResult) {
                        return usernameResult
                    }
                }
        })
        return filtered
    }
    else {
        return listFiles
    }
}

//module.exports = filterQuery;

export function clearDeletedVideo(listFiles) {
    if (listFiles){
        var filtered = listFiles.filter(file=>
            {
                if (file.title !== file.description && !isNumber(file.title)){
                    return (file.title)
                }
        })
        return filtered
    }
    else {
        return listFiles
    }
}


