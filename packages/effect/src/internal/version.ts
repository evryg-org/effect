let moduleVersion = "3.10.7"

export const getCurrentVersion = () => moduleVersion

export const setCurrentVersion = (version: string) => {
  moduleVersion = version
}
