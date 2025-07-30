<script setup>
const headers = [
  {
    title: 'Title',
    key: 'title',
  },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'date' },
  { title: 'Actions', key: 'actions' },
]
const items = [
  {
    title: 'First',
    status: 'STATUS_COMPLETED',
    date: '07/10/2024'
  },
  {
    title: 'Second',
    status: 'STATUS_PROCESSING',
    date: '08/11/2024'
  },
  {
    title: 'Third',
    status: 'STATUS_PENDING',
    date: '09/12/2024'
  },
  {
    title: 'Fourth',
    status: 'STATUS_COMPLETED',
    date: '10/13/2024'
  },
  {
    title: 'Fifth',
    status: 'STATUS_PROCESSING',
    date: '11/14/2024'
  },
  {
    title: 'Sixth',
    status: 'STATUS_PENDING',
    date: '12/15/2024'
  }
  ,
  {
    title: 'Seventh',
    status: 'STATUS_COMPLETED',
    date: '01/16/2025'
  },
  {
    title: 'Eighth',
    status: 'STATUS_PROCESSING',
    date: '02/17/2025'
  },
  {
    title: 'Ninth',
    status: 'STATUS_PENDING',
    date: '03/18/2025'
  },
  {
    title: 'Tenth',
    status: 'STATUS_COMPLETED',
    date: '04/19/2025'
  },
  {
    title: 'Eleventh',
    status: 'STATUS_PROCESSING',
    date: '05/20/2025'
  },
  {
    title: 'Twelfth',
    status: 'STATUS_PENDING',
    date: '06/21/2025'
  },
  {
    title: 'Thirteenth',
    status: 'STATUS_COMPLETED',
    date: '07/22/2025'
  },
  {
    title: 'Fourteenth',
    status: 'STATUS_PROCESSING',
    date: '08/23/2025'
  },
  {
    title: 'Fifteenth',
    status: 'STATUS_PENDING',
    date: '09/24/2025'
  },
  {
    title: 'Sixteenth',
    status: 'STATUS_COMPLETED',
    date: '10/25/2025'
  }
]

const mapStatusText = (status) => {
  switch (status) {
    case 'STATUS_COMPLETED':
      return 'Completed'
    case 'STATUS_PROCESSING':
      return 'Processing...'
    case 'STATUS_PENDING':
      return 'To process'
    default:
      return 'unknown'
  }
}

const handleRowClick = (click, row) => {
  console.log('clicked', click, row)
}
</script>

<template>
  <v-data-table 
    :headers="headers"
    :items="items"
    @click:row="handleRowClick">
      <template v-slot:[`item.status`]="{ item }">
        <span :style="{ 
          display: 'inline-block', 
          width: '6px', 
          height: '6px', 
          'border-radius': '50%', 
          'background-color': item.status === 'STATUS_COMPLETED' ? '#3bf083' : item.status === 'STATUS_PROCESSING' ? '#396df0' : '#f96057', 
          'margin-right': '5px' 
          }"></span>
        {{ mapStatusText(item.status) }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn class="status-btn" variant="outlined" color="btn-inactive" rounded v-if="item.status === 'STATUS_COMPLETED'">View</v-btn>
        <v-btn class="status-btn" variant="flat" color="primary" rounded v-else-if="item.status === 'STATUS_PENDING'">Process</v-btn>
      </template>
  </v-data-table>
</template>

<style scoped>
</style>