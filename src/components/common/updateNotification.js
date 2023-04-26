import { Notification, Button } from '@arco-design/web-react'
import { IconFaceSmileFill } from '@arco-design/web-react/icon'

export default function updateNotification() {
  const id = `${Date.now()}`
  Notification.info({
    id,
    icon: <IconFaceSmileFill style={{ color: 'rgb(130, 133, 244)' }} />,
    title: 'Upgrade',
    content: 'This application has been updated. Reload to display the latest version?',
    duration: 0,
    position: 'bottomRight',
    btn: (
      <span>
        <Button
          type="secondary"
          size="small"
          onClick={() => Notification.remove(id)}
          style={{ margin: '0 12px', backgroundColor: 'rgb(130, 133, 244)' }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            Notification.remove(id)
            if (typeof window !== 'undefined') {
              window.location.reload()
            }
          }}
        >
          Ok
        </Button>
      </span>
    ),
  })
}
