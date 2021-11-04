import { useState, useEffect } from 'react';

const useMovieStatus = (_isOnline) => {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        setIsOnline(_isOnline);
    })

    return isOnline ? 'Online' : 'Offline';
}

export default useMovieStatus;