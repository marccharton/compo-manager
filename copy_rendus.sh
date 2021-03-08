# script pour copier tous les rendus wav en un seul dossier. 
# Alimenter ce dossier par la suite pour avoir toutes mes compos au même endroit. 

for d in */ ; do 
    set echo on
    echo "Configuration du projet suivant : $d"
    set echo off


    cd "$d"

    if [ -d "Rendus" ]; then
    # Take action if $DIR exists. #
    echo "Installing config files in pouet..."
    fi


    cd ..

    # cp .env $d
    # cp ../launcher.sh $d

    # cd $d
    # npm install
    # cd ..
    
done
